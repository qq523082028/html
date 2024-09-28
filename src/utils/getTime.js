import { h } from "vue";
import { SpaCandle } from "@icon-park/vue-next";
import dayjs from "dayjs";

// 时钟
export const getCurrentTime = () => {
  让 时间=新日期（）；
  设 年=时间。获取完整年份( ) ;
  让 月份=时间。getMonth ( ) + 1 < 10 ? " 0" + ( time.getMonth ( ) + 1 ) : 时间。getMonth ( ) + 1 ;
  让 天=时间。getDate ( ) < 10 ? “0” +时间。getDate ( )：时间。获取日期（）；
  让 小时=时间。getHours ( ) < 10 ? “0” +时间。getHours ( )：时间。获取时间（）；
  让 分钟=时间。getMinutes ( ) < 10 ? “0” +时间。getMinutes ( )：时间。获取分钟数( ) ;
  让 秒=时间。getSeconds ( ) < 10 ? “0” +时间。getSeconds ( )：时间。getSeconds ( ) ;
  let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  让 当前时间= {
    年，
    月，
    天，
    小时，
    分钟，
    第二，
    工作日: 工作日[时间。getDay ( ) ] ,
  } ;
  返回当前时间；
} ;

// 时光胶囊
导出 const  getTimeCapsule = ( ) => {
  const  now = dayjs ( ) ;
  常量 日文本= {
    日复一日”，​
    week: "本周",
    month: "本月",
    year: "本年",
  } ;
  /**
   * 计算时间差的函数
   * @param {String} unit 时间单位，可以是 'day', 'week', 'month', 'year'
   */
  const  getDifference = (单位) => {
    // 获取当前时间单位的开始时间
    const start = now.startOf(unit);
    // 获取当前时间单位的结束时间
    const end = now.endOf(unit);
    // 计算总的天数或小时数
    const total = end.diff(start, unit === "day" ? "hour" : "day") + 1;
    // 计算已经过去的天数或小时数
    let passed = now.diff(start, unit === "day" ? "hour" : "day");
    if (unit === "week") {
      passed = (passed + 6) % 7;
    }
    const 剩余= 总计 - 通过；
    const 百分比= (通过 / 总数) * 100 ;
    // 返回数据
    返回 {
      名称：dayText [单位]，
      总计：总计，
      通过：通过，
      剩余：剩余，
      百分比：百分比。至固定( 2 ) ,
    } ;
  } ;
  返回 {
    天：getDifference （“天” ），
    week: getDifference("week"),
    month: getDifference("month"),
    year: getDifference("year"),
  };
};

// 欢迎提示
export const helloInit = () => {
  const hour = new Date().getHours();
  let hello = null;
  if (hour < 6) {
    hello = "凌晨好";
  } else if (hour < 9) {
    hello = "早上好";
  } else if (hour < 12) {
    hello = "上午好";
  } else if (hour < 14) {
    hello = "中午好";
  } else if (hour < 17) {
    hello = "下午好";
  } else if (hour < 19) {
    hello = "傍晚好";
  } else if (hour < 22) {
    hello = "晚上好";
  } else {
    hello = "夜深了";
  }
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: `<strong>${hello}</strong> 欢迎来到我的主页`,
  });
};

// 默哀模式
const anniversaries = {
  4.4: "清明节",
  5.12: "汶川大地震纪念日",
  7.7: "中国人民抗日战争纪念日",
  9.18: "九·一八事变纪念日",
  12.13: "南京大屠杀死难者国家公祭日",
};
export const checkDays = () => {
  const myDate = new Date();
  const mon = myDate.getMonth() + 1;
  const date = myDate.getDate();
  const key = `${mon}.${date}`;
  if (Object.prototype.hasOwnProperty.call(anniversaries, key)) {
    console.log(`今天是${anniversaries[key]}`);
    const gray = document.createElement("style");
    gray.innerHTML = "html{filter: grayscale(100%)}";
    document.head.appendChild(gray);
    ElMessage({
      message: `今天是${anniversaries[key]}`,
      duration: 14000,
      icon: h(SpaCandle, { theme: "filled", fill: "#efefef" }),
    });
  }
};

// 建站日期统计
export const siteDateStatistics = (startDate) => {
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - startDate.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  const differenceInMonths = differenceInDays / 30;
  const differenceInYears = differenceInMonths / 12;
  if (differenceInYears >= 1) {
    return `本站已经苟活了 ${Math.floor(differenceInYears)} 年 ${Math.floor(
      differenceInMonths % 12,
    )} 月 ${Math.round(differenceInDays % 30)} 天`;
  } else if (differenceInMonths >= 1) {
    return `本站已经苟活了 ${Math.floor(differenceInMonths)} 月 ${Math.round(
      differenceInDays % 30,
    )} 天`;
  } else {
    return `本站已经苟活了 ${Math.round(differenceInDays)} 天`;
  }
};
