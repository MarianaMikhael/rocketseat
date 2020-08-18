const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "Química",
    "História",
    "Matemática",
    "Português",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function convertHoursToMinutes(time) {
    const [ hour, minutes ] = time.split(":")
    return Number((hour * 60) + minutes)
}

// "module.exports" permite importar as funcionalidades para outros arquivos
module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
