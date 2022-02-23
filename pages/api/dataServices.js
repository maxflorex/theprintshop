
import canvasIcon from '../components/Images/icons-color/tps-icons-canvas.svg'
import framingIcon from '../components/Images/icons-color/tps-icons-framing.svg'
import paperIcon from '../components/Images/icons-color/tps-icons-paper.svg'
import aluminumIcon from '../components/Images/icons-color/tps-icons-metalic.svg'

const link = 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&width=2070&q=80'

const canvasBg = 'https://images.unsplash.com/photo-1575743106679-ca06346681c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80'
const framingBg = 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
const aluminumBg = 'https://images.unsplash.com/photo-1612504200882-d29bf3f2cc13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1056&q=80'
const paperBg = 'https://images.unsplash.com/photo-1479009956747-647858cb2b07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'

export const data = [
    {
        id: 1,
        title: 'Canvas',
        subtitle: 'Subtitle',
        link: '/products/canvas',
        image: canvasIcon,
        bg: canvasBg,
    },
    {
        id: 1,
        title: 'Framing',
        subtitle: 'Subtitle',
        link: '/products/framing',
        image: framingIcon,
        bg: framingBg,
    },
    {
        id: 1,
        title: 'Paper',
        subtitle: 'Subtitle',
        link: '/products/paper',
        image: paperIcon,
        bg: paperBg,
    },
    {
        id: 1,
        title: 'Aluminum',
        subtitle: 'Subtitle',
        link: '/products/aluminum',
        image: aluminumIcon,
        bg: aluminumBg,
    }
]