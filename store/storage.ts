export type Image = {
    src: string;
    vertical?: boolean;
}

export type Memory = {
    image?: Image,
    title: string;
    text: string
}

export type Room = {
    memos: Memory[];
    photos: Image[]
}

const storage = {
    kitchen: {
        memos: [
            {
                title: "Камчатая скатерть",
                text: "Камчатая скатерть, вытканная в крепостной мастерской прадеда Блока, находилась когда- то в Шахмотовеб Шкаф - из семьи Е.П.Иванова",
                image: {
                    src: "skatert.jpg"
                }
            },
            {
                title: "Рыбий щенок",
                text: "Подарок художницы Любови Дмитриевны",
                image: {
                    src: 'fish_dog.jpg',
                },
            },
            {
                title: "Двор Замка",
                text: 'Эскиз декорации "Двор замка" работы М. В. Добужинского к постановке драмы "Роза и крест"',
                image: null
            },
        ],
        photos: [
            {
                src: 'kitchen.jpg'
            }
        ]
    },
    wife: {
        memos: [
            {
                title: "Болшое зеркало",
                text: "Большое зеркало, перед которым она разучивала роли и работала над сценическим движением",
                image: {
                    src: "mirror.jpg",
                    vertical: true
                }
            },
            {
                title: 'Икона "Спас Вседержатель"',
                text: "Икона, принадлежавшая матери поэта",
                image: {
                    src: "spas.jpg",
                    vertical: true
                }
            },
            {
                title: "Портрет Л.Д.Блок",
                text: "Портрет жены поэта работы Т. Н. Гиппиус",
                image: {
                    src: "ldblock.jpg",
                    vertical: true
                }
            }
        ],
        photos: [
            {
                src: 'wife_left.jpg'
            },
            {
                src: 'wife_right.jpg'
            }
        ]
    },
    office: {
        memos: [
            {
                title: "Произведения",
                text: 'В этом кабинете А. А. Блок создавал почти все свои произведения 1912-1920 годов, в том числе стихотворные циклы "О чем поет ветер". "Жизнь моего приятеля", "Черная кровь"',
                image: null
            }
        ],
        photos: [
            { src: 'office.jpg' }
        ]
    },
    bedroom: {
        memos: [
            {
                title: 'Акварель',
                text: "Картина с видом на Шахматова работы деда Блока А. Н. Бекетова",
                image: {
                    src: "shahmatov.jpg"
                }
            },
        ],
        photos: [
            {
                src: 'bedroom.jpg'
            }
        ]
    },
    exponts: {
        memos: [
            {
                title: "Дом Бекетовых",
                text: 'Макет дома Бекетовых - семьи деда Блока',
                image: {
                    src: 'maket.jpg'
                }
            },
            {
                title: 'Запах Вдохновения',
                text: "Установка стихов Блока с запахом того, о чем он писал",
                image: { src: "rose.jpg" }
            }
        ],
        photos: [
            {
                src: 'exponts.jpg'
            }
        ]
    }
}

export default storage