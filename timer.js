const timer = () => {
    for (let i = 0; i < 10; i++) {

        setTimeout(() => {

            console.log(i)

        }, i * 100)

    }
}
module.exports = {timer}