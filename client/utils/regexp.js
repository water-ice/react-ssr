export default {
    mobile:/^1[3|4|5|7|8][0-9]{9}$/,
    mobileAbroad: /^[0-9]{1,}$/,
    email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
    number: /^[0-9]{1,}$/,
    chinese:/^[\u4E00-\u9FA5]+$/,
    letter:/^[a-zA-Z]+$/,
    verify:/[0-9]{6}/,
    password:/[a-zA-Z0-9_]{6,18}$/,
}