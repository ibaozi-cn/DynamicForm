/**
 * 校验是否为空
 * @param value
 * @returns {boolean}
 */
export function isEmpty(value) {
    return value.trim() === '';
}

/**
 * 校验邮件
 * @param value
 * @returns {boolean}
 */
export function isEmail(value) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(value);
}

/**
 * 校验身份证号
 * @param value
 * @returns {boolean}
 */
export function isIdCardNo(value) {
    const p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    return p.test(value);
}

/**
 * 校验手机号
 * @param value
 * @returns {boolean}
 */
export function isPhoneNo(value) {
    const reg = /^1[3|4|5|7|8][0-9]{9}$/;
    return reg.test(value);
}