const EngleshButton = document.getElementById('english')
const GeorgianButton = document.getElementById('georgian')
const EngleshButton2 = document.getElementById('english2')
const GeorgianButton2 = document.getElementById('georgian2')

EngleshButton.addEventListener('click', () => {
    localStorage.setItem('language', 'en')
    document.location.reload()
})
GeorgianButton.addEventListener('click', () => {
    localStorage.setItem('language', 'ka')
    document.location.reload()
})
EngleshButton2.addEventListener('click', () => {
    localStorage.setItem('language', 'en')
    document.location.reload()
})
GeorgianButton2.addEventListener('click', () => {
    localStorage.setItem('language', 'ka')
    document.location.reload()
})
const contactUs = document.getElementsByClassName('contact-us');

const announcement = document.getElementById('announcement')
const search = document.getElementById('search');

const home1 = document.getElementById('home1');
const product1 = document.getElementById('product1');
const contact1 = document.getElementById('contact1');
const authorization1 = document.getElementById('authorization1');
const registration1 = document.getElementById('registration1');
const partners1 = document.getElementById('partners1');
const headquarters1 = document.getElementById('headquarters1');

const home2 = document.getElementById('home2');
const product2 = document.getElementById('product2');
const contact2 = document.getElementById('contact2');
const authorization2 = document.getElementById('authorization2');
const registration2 = document.getElementById('registration2');
const partners2 = document.getElementById('partners2');
const headquarters2 = document.getElementById('headquarters2');


const language = localStorage.getItem('language');
if (language === 'ka') {
    if (document.getElementById('contactUs') !== null) document.getElementById('contactUs').innerHTML = 'დაგვიკავშირდი'
    if (document.getElementById('contactEmail') !== null) document.getElementById('contactEmail').innerHTML = 'მეილი: timeless.team@Gmail.com'
    if (document.getElementById('contactPhone') !== null) document.getElementById('contactPhone').innerHTML = 'ტელეფონი : +(995) 599 999 999 999'
    if (document.getElementById('ourPartners') !== null) document.getElementById('ourPartners').innerHTML = 'ჩვენი პარტნიორები'

    if (document.getElementById('FormAuthorization') !== null) document.getElementById('FormAuthorization').innerHTML = 'ავტორიზაცია'
    if (document.getElementById('AuthName') !== null) document.getElementById('AuthName').placeholder = 'შეიყვანეთ მეილი ან ტელეფონის ნომერი'
    if (document.getElementById('authPassword') !== null) document.getElementById('authPassword').placeholder = 'შეიყვანეთ პაროლი'
    if (document.getElementById('login') !== null) document.getElementById('login').innerHTML = 'შესვლა'
    
    if (document.getElementById('FormRegistration') !== null) document.getElementById('FormRegistration').innerHTML = 'რეგისტრაცია'
    if (document.getElementById('email') !== null) document.getElementById('email').placeholder = 'ემაილი'
    if (document.getElementById('password') !== null) document.getElementById('password').placeholder = 'პაროლი'
    if (document.getElementById('confirmPassword') !== null) document.getElementById('confirmPassword').placeholder = 'გაიმეორეთ პაროლი'
    if (document.getElementById('country') !== null) document.getElementById('country').placeholder = 'ქვეყანა'
    if (document.getElementById('city') !== null) document.getElementById('city').placeholder = 'ქალაქი'
    if (document.getElementById('phone') !== null) document.getElementById('phone').placeholder = 'ტელეფონი'
    if (document.getElementById('registerButton') !== null) document.getElementById('registerButton').innerHTML = 'რეგისტრაცია'

    EngleshButton.innerHTML = 'ინგლისური'
    GeorgianButton.innerHTML = 'ქართული'
    EngleshButton2.innerHTML = 'ინგლისური'
    GeorgianButton2.innerHTML = 'ქართული'
    announcement.innerHTML = 'უფასო მიწოდება მთელს მსოფლიოში ყველა ძვირადღირებული საათისთვის'
    search.placeholder = 'ძებნა'

    home1.innerHTML = 'მთავარი'
    product1.innerHTML = 'პროდუქტები'
    contact1.innerHTML = 'კონტაქტი'
    authorization1.innerHTML = 'ავტორიზაცია'
    registration1.innerHTML = 'რეგისტრაცია'
    partners1.innerHTML = 'პარტნიორები'
    headquarters1.innerHTML = 'ოფისი'

    home2.innerHTML = 'მთავარი'
    product2.innerHTML = 'პროდუქტები'
    contact2.innerHTML = 'კონტაქტი'
    authorization2.innerHTML = 'ავტორიზაცია'
    registration2.innerHTML = 'რეგისტრაცია'
    partners2.innerHTML = 'პარტნიორები'
    headquarters2.innerHTML = 'ოფისი'
}