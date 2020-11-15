Vue.filter('number_format',function(val){
    return val.toLocaleString();
});

var app = new Vue ({
    el: '#app',
    data: {
        count: 0,
        showSaleItem: false,
        showDelvFree: false,
        sortOrder: false,
        products: [
            { id: 1, name: '塩ラーメン<br>☆☆',price: 1000, image: 'images/01.jpg', delv: 0, isSale: false },
            { id: 2, name: '豚骨ラーメン<br>☆☆☆',price: 900, image: 'images/02.jpg', delv: 0, isSale: true },
            { id: 3, name: '醤油ラーメン<br>☆☆☆☆',price: 800, image: 'images/03.jpg', delv: 250, isSale: true },
            { id: 4, name: '味噌ラーメン<br>☆☆☆',price: 500, image: 'images/04.jpg', delv: 0, isSale: true },
            { id: 5, name: 'ラーメン??<br>☆',price: 1500, image: 'images/05.jpg', delv: 2000, isSale: false },
            { id: 6, name: '魚介ラーメン<br>☆☆☆☆☆',price: 750, image: 'images/01.jpg', delv: 0, isSale: true },
        ]
    },
    computed: {
        //絞り込み後の商品リストを返す算出properties
        filteredList: function() {
                //絞り込み後の商品リストを格納する新しい配列
                var newList = [];
                for (var i=0; i<this.products.length; i++) {
                    //表示対象かどうかを判定するフラグ
                    var isShow = true;
                    //i番目の商品が表示対象かどうかを判定する
                    if (this.showSaleItem && !this.products[i].isSale) {
                        //セール対象チェックアリで、セール対象商品ではない場合
                        isShow = false;//この商品は表示しない
                    }
                    if (this.showDelvFree && this.products[i].delv > 0) {
                        //送料無料チェックアリで、送料アリの商品の場合
                        isShow = false;//この商品は表示しない
                    }
                    //表示対象の商品だけを新しい配列に追加する
                    if (isShow) {
                        newList.push(this.products[i]);
                    }
                }
                //新しい配列を並び替える
                if (this.sortOrder == 1) {
                    //もとの順番にpushしているので並び替え済み
                }
                else if (this.sortOrder == 2) {
                    //価格が安い順に並び替える
                    newList.sort(function(a,b){
                        return a.price - b.price;
                    })
                }
                //絞込後の商品リストを返す
                return newList;
            },
        },

    watch: {
        //セール対象チェックボックスの状態を監視するウォッチャ
        showSaleItem: function(newVal, oldVal) {
            //ここでproductsの配列を書き換える
            console.log('showSaleItemウォッチャが呼び出されました')
        },
        showDelvFree: function(newVal, oldVal) {
            //ここでproductsの配列を書き換える
            console.log('showDelFreeウォッチャが呼び出された');
        }
    }
});
