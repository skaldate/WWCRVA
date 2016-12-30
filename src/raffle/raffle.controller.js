app.controller('RaffleController', RaffleController);

RaffleController.$inject = ['RaffleItemService'];
function RaffleController(RaffleItemService) {
    var raffle = this;

    raffle.swagItems = RaffleItemService.getItemList();
    raffle.selectedItem = {};

    raffle.raffleItem = raffleItem;
    raffle.raffleGiven = raffleGiven;

    function raffleGiven() {
        RaffleItemService.deleteItem(raffle.selectedItem);
        raffle.swagItems = RaffleItemService.getItemList();
        raffle.selectedItem = {};
    }

    function raffleItem(item) {
        raffle.selectedItem = item;
    }
}