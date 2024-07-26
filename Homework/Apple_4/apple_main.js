const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            models: [
                {
                    id: 1,
                    model: "iPhone 15 Pro",
                    startPrice: "NT$36,900 起",
                    monitor: '6.1吋顯示器'
                },
                {
                    id: 2,
                    model: "iPhone 15 Pro Max",
                    startPrice: "NT$44,900 起",
                    monitor: '6.7吋顯示器'
                }
            ],
            i15Models: [
                {
                    id: 1,
                    model: "iPhone 15",
                    startPrice: "NT$29,900 起",
                    monitor: '6.1吋顯示器'
                },
                {
                    id: 2,
                    model: "iPhone 15 Plus",
                    startPrice: "NT$32,900 起",
                    monitor: '6.7吋顯示器'
                }
            ],
            colors: [
                {
                    id: 1,
                    imgSrc: "iphone-pro-finish-naturaltitanium-202309.jfif",
                    imgAlt: "原色鈦金屬"
                },
                {
                    id: 2,
                    imgSrc: "iphone-pro-finish-bluetitanium-202309.jfif",
                    imgAlt: "藍色鈦金屬"
                },
                {
                    id: 3,
                    imgSrc: "iphone-pro-finish-whitetitanium-202309.jfif",
                    imgAlt: "白色鈦金屬"
                },
                {
                    id: 4,
                    imgSrc: "iphone-pro-finish-blacktitanium-202309.jfif",
                    imgAlt: "黑色鈦金屬"
                }
            ],
            i15Colors: [
                {
                    id: 1,
                    imgSrc: "finish-blue-202309.jfif",
                    imgAlt: "藍色"
                },
                {
                    id: 2,
                    imgSrc: "finish-pink-202309.jfif",
                    imgAlt: "粉色"
                },
                {
                    id: 3,
                    imgSrc: "finish-yellow-202309.jfif",
                    imgAlt: "黃色"
                },
                {
                    id: 4,
                    imgSrc: "finish-green-202309.jfif",
                    imgAlt: "綠色"
                },
                {
                    id: 5,
                    imgSrc: "finish-black-202309.jfif",
                    imgAlt: "黑色"
                }
            ],
            storages: [
                {
                    id: 1,
                    storageContent: "128GB",
                    price: "NT$36,900"
                },
                {
                    id: 2,
                    storageContent: "256GB",
                    price: "NT$40,400"
                },
                {
                    id: 3,
                    storageContent: "512GB",
                    price: "NT$47,400"
                },
                {
                    id: 4,
                    storageContent: "1TB",
                    price: "NT$54,400"
                }
            ],
            proMaxStorages: [
                {
                    id: 1,
                    storageContent: "256GB",
                    price: "NT$44,900"
                },
                {
                    id: 2,
                    storageContent: "512GB",
                    price: "NT$51,900"
                },
                {
                    id: 3,
                    storageContent: "1TB",
                    price: "NT$58,900"
                },
            ],
            i15Storages: [
                {
                    id: 1,
                    storageContent: "128GB",
                    price: "NT$29,900"
                },
                {
                    id: 2,
                    storageContent: "256GB",
                    price: "NT$33,400"
                },
                {
                    id: 3,
                    storageContent: "512GB",
                    price: "NT$40,400"
                },
            ],
            i15PlusStorages: [
                {
                    id: 1,
                    storageContent: "128GB",
                    price: "NT$32,900"
                },
                {
                    id: 2,
                    storageContent: "256GB",
                    price: "NT$36,400"
                },
                {
                    id: 3,
                    storageContent: "512GB",
                    price: "NT$43,400"
                },
            ],
            carousels: [
                {
                    id: 1,
                    imgSrc1: "iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium.webp",

                    imgSrc2: "iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV1.webp",

                    imgSrc3: "iphone-15-pro-finish-select-202309-6-7inch_AV3.webp",

                    imgSrc4: "iphone-15-pro-finish-select-202309-6-7inch_AV4.webp",

                    color: '原色鈦金屬'

                },
                {
                    id: 2,
                    imgSrc1: "iphone-15-pro-storage-select-202309-6-1inch-bluetitanium.webp",

                    imgSrc2: "iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV1.webp",

                    imgSrc3: "iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV2.webp",

                    imgSrc4: "iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV3.webp",

                    color: '藍色鈦金屬'
                },
                {
                    id: 3,
                    imgSrc1: "iphone-15-pro-finish-select-202309-6-1inch-whitetitanium.webp",

                    imgSrc2: "iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV1.webp",

                    imgSrc3: "iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV2.webp",

                    imgSrc4: "iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV3.webp",

                    color: '白色鈦金屬'
                },
                {
                    id: 4,
                    imgSrc1: "iphone-15-pro-finish-select-202309-6-1inch-blacktitanium.webp",

                    imgSrc2: "iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV1.webp",

                    imgSrc3: "iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV2.webp",

                    imgSrc4: "iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV3.webp",

                    color: '黑色鈦金屬'
                }


            ],
            i15Carousels: [
                {
                    id: 1,
                    imgSrc1: "iphone-15-finish-select-202309-6-1inch-blue.webp",

                    imgSrc2: "iphone-15-finish-select-202309-6-1inch-blue_AV1.webp",

                    imgSrc3: "iphone-15-finish-select-202309-6-1inch-blue_AV2.webp",

                    color: '藍色'

                },
                {
                    id: 2,
                    imgSrc1: "iphone-15-finish-select-202309-6-1inch-pink.webp",

                    imgSrc2: "iphone-15-finish-select-202309-6-1inch-pink_AV1.webp",

                    imgSrc3: "iphone-15-finish-select-202309-6-1inch-pink_AV2.webp",

                    color: '粉色'

                },
                {
                    id: 3,
                    imgSrc1: "iphone-15-finish-select-202309-6-1inch-yellow.webp",

                    imgSrc2: "iphone-15-finish-select-202309-6-1inch-yellow_AV1.webp",

                    imgSrc3: "iphone-15-finish-select-202309-6-1inch-yellow_AV2.webp",
                    color: '黃色'


                },
                {
                    id: 4,
                    imgSrc1: "iphone-15-finish-select-202309-6-1inch-green.webp",

                    imgSrc2: "iphone-15-finish-select-202309-6-1inch-green_AV1.webp",

                    imgSrc3: "iphone-15-finish-select-202309-6-1inch-green_AV2.webp",

                    color: '綠色'
                },
                {
                    id: 5,
                    imgSrc1: "iphone-15-finish-select-202309-6-1inch-black.webp",

                    imgSrc2: "iphone-15-finish-select-202309-6-1inch-black_AV1.webp",

                    imgSrc3: "iphone-15-finish-select-202309-6-1inch-black_AV2.webp",

                    color: '黑色'
                },
            ],
            buyingImgs: [
                {
                    id: 1,
                    buyingImg: "buying/iphone-15-pro-naturaltitanium-select_AV2.jfif"
                },
                {
                    id: 2,
                    buyingImg: "buying/iphone-15-pro-bluetitanium-select_AV2.jfif"
                },
                {
                    id: 3,
                    buyingImg: "buying/iphone-15-pro-whitetitanium-select_AV2.jfif"
                },
                {
                    id: 4,
                    buyingImg: "buying/iphone-15-pro-blacktitanium-select_AV2.jfif"
                },
            ],
            i15BuyingImgs: [
                {
                    id: 1,
                    buyingImg: "buying/iphone-15-blue-select-202309_AV2.jfif"
                },
                {
                    id: 2,
                    buyingImg: "buying/iphone-15-pink-select-202309_AV2.jfif"
                },
                {
                    id: 3,
                    buyingImg: "buying/iphone-15-yellow-select-202309_AV2.jfif"
                },
                {
                    id: 4,
                    buyingImg: "buying/iphone-15-green-select-202309_AV2.jfif"
                },
                {
                    id: 5,
                    buyingImg: "buying/iphone-15-black-select-202309_AV2.jfif"
                }
            ],
            titleBuying: '購買 iPhone 15 Pro',
            titlePrice: 'NT$36,900起',
            modelAlreadySelected: 1,
            colorAlreadySelected: 1,
            storageAlreadySelected: null,

            show15proModels: true,
            show15Models: false,

            show15proCarousels: true,
            show15Carousels: false,

            i15ModelAlreadySelected: null,
            i15ColorAlreadySelected: null,
            i15StorageAlreadySelected: null,

        };
    },
    methods: {
        selectModel(modelId) {
            this.modelAlreadySelected = modelId;
        },
        i15SelectModel(modelId) {
            this.i15ModelAlreadySelected = modelId;
        },
        selectColor(colodId) {
            this.colorAlreadySelected = colodId;
        },
        i15selectColor(colodId) {
            this.i15ColorAlreadySelected = colodId;
        },
        selectStorage(storageId) {
            this.storageAlreadySelected = storageId;
        },
        i15SelectStorage(storageId) {
            this.i15StorageAlreadySelected = storageId;
        },
        clickIphone15() {
            console.log("example");
            this.titleBuying = '購買 iPhone 15';
            this.titlePrice = 'NT$29,900 起';

            this.show15proModels = false;
            this.show15Models = true;

            this.modelAlreadySelected = null;
            this.colorAlreadySelected = null;
            this.storageAlreadySelected = null;

            this.i15ModelAlreadySelected = 1;
            this.i15ColorAlreadySelected = 5;
            this.i15StorageAlreadySelected = null;
        },
        clickIphone15Pro() {
            console.log("example");
            this.titleBuying = '購買 iPhone 15 Pro';
            this.titlePrice = 'NT$36,900起';

            this.show15proModels = true;
            this.show15Models = false;

            this.modelAlreadySelected = 1;
            this.colorAlreadySelected = 1;
            this.storageAlreadySelected = null;

            this.i15ModelAlreadySelected = null;
            this.i15ColorAlreadySelected = null;
            this.i15StorageAlreadySelected = null;
        }
    },
    computed: {
        allOptionsSelected() {
            return this.modelAlreadySelected !== null &&
                this.colorAlreadySelected !== null &&
                this.storageAlreadySelected !== null;
        },
        i15AllOptionsSelected() {
            return this.i15ModelAlreadySelected !== null &&
                this.i15ColorAlreadySelected !== null &&
                this.i15StorageAlreadySelected !== null;
        },
        printSelectedModel() {
            const selectedModel = this.models.find(model => model.id === this.modelAlreadySelected);
            return selectedModel ? selectedModel.model : '請選擇機型';
        },
        i15PrintSelectedModel() {
            const selectedModel = this.i15Models.find(model => model.id === this.i15ModelAlreadySelected);
            return selectedModel ? selectedModel.model : '請選擇機型';
        },
        printSelectedColor() {
            const selectedColor = this.colors.find(color => color.id === this.colorAlreadySelected);
            return selectedColor ? selectedColor.imgAlt : '請選擇顏色';
        },
        i15PrintSelectedColor() {
            const selectedColor = this.i15Colors.find(color => color.id === this.i15ColorAlreadySelected);
            return selectedColor ? selectedColor.imgAlt : '請選擇顏色';
        },
        printSelectedStorage() {
            const selectedStorage = this.storages.find(storage => storage.id === this.storageAlreadySelected);
            return selectedStorage ? selectedStorage.storageContent : '請選擇容量';
        },
        ProMaxPrintSelectedStorage() {
            const selectedStorage = this.proMaxStorages.find(storage => storage.id === this.storageAlreadySelected);
            return selectedStorage ? selectedStorage.storageContent : '請選擇容量';
        },
        i15PrintSelectedStorage() {
            const selectedStorage = this.i15Storages.find(storage => storage.id === this.i15StorageAlreadySelected);
            return selectedStorage ? selectedStorage.storageContent : '請選擇容量';
        },
        i15PlusPrintSelectedStorage() {
            const selectedStorage = this.i15PlusStorages.find(storage => storage.id === this.i15StorageAlreadySelected);
            return selectedStorage ? selectedStorage.storageContent : '請選擇容量';
        },
        printSelectedPrice() {
            const selectedPrice = this.storages.find(storage => storage.id === this.storageAlreadySelected);
            return selectedPrice ? selectedPrice.price : '未選擇容量';
        },

        ProMaxPrintSelectedPrice() {
            const selectedPrice = this.proMaxStorages.find(storage => storage.id === this.storageAlreadySelected);
            return selectedPrice ? selectedPrice.price : '未選擇容量';
        },

        i15PrintSelectedPrice() {
            const selectedPrice = this.i15Storages.find(storage => storage.id === this.i15StorageAlreadySelected);
            return selectedPrice ? selectedPrice.price : '未選擇容量';
        },

        i15PlusPrintSelectedPrice() {
            const selectedPrice = this.i15PlusStorages.find(storage => storage.id === this.i15StorageAlreadySelected);
            return selectedPrice ? selectedPrice.price : '未選擇容量';
        },

        selectedCarousel() {
            return this.carousels.find(carousel => carousel.id === this.colorAlreadySelected);
        },
        i15selectedCarousel() {
            return this.i15Carousels.find(carousel => carousel.id === this.i15ColorAlreadySelected);
        },
        selectedBuyingImage() {
            return this.buyingImgs.find(carousel => carousel.id === this.colorAlreadySelected);
        },
        i15SelectedBuyingImage() {
            return this.i15BuyingImgs.find(carousel => carousel.id === this.i15ColorAlreadySelected);
        },
    }
});
//update
app.mount("#app");