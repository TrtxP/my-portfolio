export const handleEmailClick = (e) => {
    e.preventDefault()

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    const subject = encodeURIComponent("Привіт! Потрібна допомога з проектом")
    const email = "cerepanovila13@gmail.com"

    if (isMobile) {
        window.location.href = `mailto:${email}?subject=${subject}`
    } else {
        window.open(`https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}`, '_blank')
    }
}