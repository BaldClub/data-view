/**
 * @param {date} time 需要转换的时间
 * @param {String} fmt 需要转换的格式 如 yyyy-MM-dd、yyyy-MM-dd HH:mm:ss
 */
export function formatTime(time, fmt) {
  if (!time) return "";
  else {
    const date = new Date(time);
    const o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "H+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds(),
      "q+": Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds(),
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    for (const k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return fmt;
  }
}

/**
 * 获取随机数值
 *
 * @param {0} initNum 初始数值
 * @param {1} offset 偏移量
 * @param {2} fixed 保留小数点后几位
 * @param {2} unit 单位
 * @returns string
 */
const getRandom = ([initNum, offset, fixed, unit]) => {
  let randomNum = initNum + Math.random() * offset * 2 - offset;
  randomNum = fixed ? randomNum.toFixed(fixed) : Math.floor(randomNum);

  return `${randomNum} ${unit}`;
};

/**
 *
 * @param that this 指针
 * @param ms 定时器毫秒数，为 0 则不启动定时器
 */
export const randomData = (that, ms) => {
  if (ms) {
    setInterval(() => {
      that.data = that.data.map(({ value, random, ...others }) => ({
        value: random ? getRandom(random) : value,
        random,
        ...others,
      }));
    }, ms);
  }
};
