const base64 = {
    TABLE:'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    REGEX_SPACE_CHARACTERS : /<%= spaceCharacters %>/g,
    encode:function(input) {
        input = String(input);
        if (/[^\0-\xFF]/.test(input)) {
            throw new Error(
                'The string to be encoded contains characters outside of the ' +
                'Latin1 range.'
            );
        }
        var padding = input.length % 3;
        var output = '';
        var position = -1;
        var a;
        var b;
        var c;
        var d;
        var buffer;
        var length = input.length - padding;

        while (++position < length) {
            a = input.charCodeAt(position) << 16;
            b = input.charCodeAt(++position) << 8;
            c = input.charCodeAt(++position);
            buffer = a + b + c;
            output += (
                this.TABLE.charAt(buffer >> 18 & 0x3F) +
                this.TABLE.charAt(buffer >> 12 & 0x3F) +
                this.TABLE.charAt(buffer >> 6 & 0x3F) +
                this.TABLE.charAt(buffer & 0x3F)
            );
        }

        if (padding == 2) {
            a = input.charCodeAt(position) << 8;
            b = input.charCodeAt(++position);
            buffer = a + b;
            output += (
                this.TABLE.charAt(buffer >> 10) +
                this.TABLE.charAt((buffer >> 4) & 0x3F) +
                this.TABLE.charAt((buffer << 2) & 0x3F) +
                '='
            );
        } else if (padding == 1) {
            buffer = input.charCodeAt(position);
            output += (
                this.TABLE.charAt(buffer >> 2) +
                this.TABLE.charAt((buffer << 4) & 0x3F) +
                '=='
            );
        }

        return output;
    },
    decode:function(input) {
        input = String(input)
            .replace(this.REGEX_SPACE_CHARACTERS, '');
        var length = input.length;
        if (length % 4 == 0) {
            input = input.replace(/==?$/, '');
            length = input.length;
        }
        if (
            length % 4 == 1 ||
            /[^+a-zA-Z0-9/]/.test(input)
        ) {
            throw new Error(
                'Invalid character: the string to be decoded is not correctly encoded.'
            );
        }
        var bitCounter = 0;
        var bitStorage;
        var buffer;
        var output = '';
        var position = -1;
        while (++position < length) {
            buffer = this.TABLE.indexOf(input.charAt(position));
            bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
            if (bitCounter++ % 4) {
                output += String.fromCharCode(
                    0xFF & bitStorage >> (-2 * bitCounter & 6)
                );
            }
        }
        return output;
    }            
}
module.exports = base64;