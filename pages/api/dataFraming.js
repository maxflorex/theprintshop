import frame1 from '../components/Images/frames/FRAMES-01.svg'
import frame2 from '../components/Images/frames/FRAMES-02.svg'
import frame3 from '../components/Images/frames/FRAMES-03.svg'
import frame4 from '../components/Images/frames/FRAMES-04.svg'
import frame5 from '../components/Images/frames/FRAMES-04-2.svg'
import frame6 from '../components/Images/frames/FRAMES-04-3.svg'

export const dataFraming = [
    {
        color: [
            {
                color: 'Black',
                frame: frame4,
                img: 'dot color2'
            },
            {
                color: 'White',
                frame: frame5,
                img: 'dot color1'
            },
            {
                color: 'Natural',
                frame: frame6,
                img: 'dot color3'
            },
        ]
    },
    {
        glass: [
            {
                title: 'Plexi / Acrylic',
                reflection: 'Regular',
                img: ''
            },
            {
                title: 'Plexi / Acrylic',
                reflection: 'Nonreflective',
                img: ''
            },
            {
                title: 'Glass',
                reflection: 'Nonreflective',
                img: 'Regular'
            },
        ]
    },
    {
        moulding: [
            {
                title: 'A',
                img: frame1,
                front: '1 5/16',
                rabbet: '7/16',
                side: '9/16'
            },
            {
                title: 'B',
                img: frame2,
                front: '1 3/16',
                rabbet: '1',
                side: '1 3/16'
            },
            {
                title: 'C',
                img: frame3,
                front: '1 15/16',
                rabbet: '1/2',
                side: '13/16'
            },
        ]
    },
    {
        mat: [
            {
                color: 'Black',
                img: 'dot color2'
            },
            {
                color: 'White',
                img: 'dot color1'
            }
        ],
        size: [
            {
                width: '1"'
            },
            {
                width: '2"'
            },
            {
                width: '2.5"'
            },
            {
                width: '3"'
            },
            {
                width: '4"'
            },
        ]
    },
]