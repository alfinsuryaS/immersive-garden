
let IMGPATHSOURCE = `assets/img/`,
    VIDEOPATHSOURCE = `assets/video/`

const ImageSource:any = ({
    global: {
        logo: require(`../${IMGPATHSOURCE}logotype.png`),
        logoSmall: require(`../${IMGPATHSOURCE}logotype--gray.png`),
        cursor: require(`../${IMGPATHSOURCE}arrow-cursor.png`),
        cursorMenu: require(`../${IMGPATHSOURCE}close-cursor.png`), 
    },
    video: {
        case1:  require(`../${VIDEOPATHSOURCE}citrix.mp4`),
        case2:  require(`../${VIDEOPATHSOURCE}rainforest.mp4`),
        case3: require(`../${VIDEOPATHSOURCE}BrokenBack.mp4`)
    }
})

export default ImageSource