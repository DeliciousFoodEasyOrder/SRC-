var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        couponList: null,
        payRequestCoupon: false,
        balance: 0,
        moneyToPay: 0,
    },
    onLoad: function (e) {
        var couponList = [
            { imgUri: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg' },
            { imgUri: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg' },
            { imgUri: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg' },
        ];
        this.setData({
            couponList: couponList,
            payRequestCoupon: app.globalData.payRequestCoupon,
            balance: app.globalData.balance,
            moneyToPay: e.moneyToPay,
        })
        
    },
    confirmButtonTap: function () {
        wx.showToast({
            title: '成功',
            icon: 'succes',
            duration: 1000,
            mask: true
        });
        app.globalData.expenseTracker.push(app.globalData.recipeSelected);
        app.globalData.recipeSelected = {
            recipeFoodImgUri: [],
            recipeDetail: [],
            recipeMoney: [],
            recipeCount: [],
            moneyToPay: 0,
        };
        console.log("coupon");
        console.log(app.globalData.recipeSelected)
        app.globalData.isPaying = false;
        setTimeout(function () {
            wx.switchTab({
                url: './../user/user',
            })
        }, 1500);

    }

})