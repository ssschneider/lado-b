export const saveRecords = (record) => {
    localStorage.setItem("records", JSON.stringify(record))
}

export const getRecords = () => {
    return JSON.parse(localStorage.getItem("records")) || []
}