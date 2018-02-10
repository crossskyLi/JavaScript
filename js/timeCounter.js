$(function () {
    //-----------------------------------------------
    function timeCount() {
        let nowTime = new Date();
        let yearTime = new Date('2018-02-12').setHours(0);
        //毫秒
        let mileSecond = parseInt((yearTime - nowTime) % 1000 / 100);
        let mileSecondStrArr = ((mileSecond) / 10).toString().split('.');
        let mileSecondStr = mileSecondStrArr[1] ? '.' + mileSecondStrArr[1] : '.0';
        //秒
        let second = Math.floor((yearTime - nowTime) / 1000);
        let secondStr = (second % 60) > 0 ? (second % 60) + mileSecondStr + '秒' : '0秒';
        //分
        let min = Math.floor(second / 60);
        let minStr = (min % 60) > 0 ? (min % 60) + '分' : '';
        //时
        let hour = Math.floor(min / 60);
        let hourStr = (hour % 24) > 0 ? (hour % 24) + '时' : '';
        //天
        let day = Math.floor(hour / 24);
        let dayStr = day > 0 ? day + '天' : '';
        let timeCountStr = dayStr + hourStr + minStr + secondStr;
        $('.time-count').text(timeCountStr)
    }

    // setInterval(timeCount, 100);
});