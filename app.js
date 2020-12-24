(function () {
    'use strict';
    angular.module('lab_4', [])
        .controller('BuyController', BuyController)
        .controller('boughtController', BoughtController)
        .service('itemsService', ItemsService);

    BuyController.$inject = ['itemsService'];
    BoughtController.$inject = ['itemsService'];

    function BuyController(service) {
        var controller = this;
        controller.BuyItems = service.getBuyItems();
        controller.addToBought = function (itemIndex) { 
            service.addBoughtItem(itemIndex);
        }
    };
    function BoughtController(service) {
        var controller = this;
        controller.boughtItems = service.getBoughtItems();
    };
    function ItemsService() {
        var service = this;
        var boughtItems = [];
        var BuyItems = [
            new Item(7, 'апельсин'),
            new Item(13, 'огірків'),
            new Item(40, 'цукерок'),
            new Item(12, 'мандаринок'),
            new Item(6, 'бананів'),
            new Item(32, 'помідорки'),
            new Item(2, 'чіпсини'),
            new Item(50, 'ківі'),
            new Item(10, 'цибулин')
        ];
        service.addBoughtItem = function (itemId) {
            boughtItems.push(BuyItems[itemId]);
            BuyItems.splice(itemId, 1);
        };
        service.getBuyItems = function () {
            return BuyItems;
        };
        service.getBoughtItems = function () {
            return boughtItems;
        };
    };
    class Item {
        constructor(amount,name) {
            this.amount = amount;
            this.name = name;
        };
    };

})();
