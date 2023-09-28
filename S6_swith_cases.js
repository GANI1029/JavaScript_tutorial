// wake up time manager 

let Day = ''

switch (Day){
    case 'mon':
        console.log('wake up at 7 am')
        break
    case 'tue':
    case 'web':
    case 'thu':
        console.log('wake up at  6 am')
        break
    case 'fri':
    case 'sat':
        console.log('wake up at 8 am ')
        break
    case 'sun':
        console.log('it holiday take rest')
        break
    default:
        console.log('wrong day selected ')
        break
}