var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        seat_id: 0,

        recipeSelected: {
            recipeFoodImgUri: [],
            recipeDetail: [],
            recipeMoney: [],
            recipeCount: [],
            recipeFoodID: [],
            recipeFoodDescription: [],
            moneyToPay: 0,
            seat_id: 0,
        },
    },
    onLoad: function(e) {
        this.setData({
            seat_id: app.globalData.seat_id
        })
    },
    onShow: function () {

        this.setData({
            recipeSelected: app.globalData.recipeSelected,

        })
        if (app.globalData.recipeSelected.recipeDetail.length != 0) {
            app.globalData.isPaying = true;
        }
    },
    onHide: function (e) {
        app.globalData.recipeSelected = this.data.recipeSelected;
    },
    minusIconTap: function (e) {
        var recipeSelected = this.data.recipeSelected;
        var index = e.currentTarget.dataset.id;

        recipeSelected.moneyToPay -= recipeSelected.recipeMoney[index];
        recipeSelected.recipeCount[index] -= 1;
        if (recipeSelected.recipeCount[index] == 0) {
            recipeSelected.recipeFoodImgUri.splice(index, 1);
            recipeSelected.recipeDetail.splice(index, 1);
            recipeSelected.recipeMoney.splice(index, 1);
            recipeSelected.recipeCount.splice(index, 1);
            recipeSelected.recipeFoodID.splice(index, 1);
            recipeSelected.recipeFoodDescription.splice(index, 1);
        }
        this.setData({
            recipeSelected: recipeSelected,
        });
    },
    confirmButtonTap: function (e) {
        if (app.globalData.isPaying && this.data.recipeSelected.moneyToPay > 0) {
            wx.navigateTo({
                url: './../coupon/coupon?&moneyToPay=' + this.data.recipeSelected.moneyToPay,
            });
            app.globalData.payRequestCoupon = true;
        }
    },

})