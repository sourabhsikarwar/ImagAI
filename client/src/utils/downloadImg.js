import FileSaver from "file-saver"

export const downloadImg = async (_id, photo) => {
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
} 