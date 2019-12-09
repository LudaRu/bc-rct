import uuid from "uuid";
let datas = [
    {
        id: uuid.v4(),
        imgUrl: 'https://klike.net/uploads/posts/2019-01/1547367999_1.jpg',
        title: 'Плата Pcb с антенной и usb портом ATMEGA128 ATtiny/CAN/PWM 10Pin',
        tags: ['JavaScript', 'Go'],
        createTime: '12:44',
        isLike: false,
    },
    {
        id: uuid.v4(),
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Square_Lattice_Tiling.svg/220px-Square_Lattice_Tiling.svg.png',
        title: '10-ти Канальный DC 5В с низким уровнем триггера',
        tags: ['PHP', 'Go'],
        createTime: '12:44',
        isLike: true,
    },
    {
        id: uuid.v4(),
        imgUrl: 'https://klike.net/uploads/posts/2019-01/1547367999_1.jpg',
        title: '12В цифровой контроллер температуры',
        tags: ['Python', 'Ruby', 'Java'],
        createTime: '12:44',
        isLike: false,
    },
    {
        id: uuid.v4(),
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Square_Lattice_Tiling.svg/220px-Square_Lattice_Tiling.svg.png',
        title: 'UART программатор 10Pin USBASP USBISP AVR',
        tags: ['PHP', 'JavaScript', 'Ruby'],
        createTime: '12:44',
        isLike: false,
    },
];


if (localStorage.getItem('myData') !== null) {
    datas = JSON.parse(localStorage.getItem('myData'));
    console.log(datas)
} else {
    localStorage.setItem('myData', JSON.stringify(datas));
}

export const Data = datas;
