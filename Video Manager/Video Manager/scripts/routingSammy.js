/**
 * Created by Ивайло on 2.9.2015 г..
 */
function sammy() {
    var sammyApp = Sammy('#content', function () {

        this.get('#/', function () {
            console.log('WHAT');
        });

        this.get('#/home', function () {
            console.log('home');
            $('#content').load('./partials/home.partial.html');

        });

        this.get('#/contacts', function () {
            console.log('contacts');
            $('#content').load('./partials/contacts.partial.html');
        });

        this.get('#/login', function () {
            console.log('login');
            $('#content').load('./partials/login.partial.html');
        });

        this.get('#/register', function () {
            console.log('register');
            $('#content').load('./partials/register.partial.html');
        });

    });

    $(function () {
        sammyApp.run('#/');
    });
}
sammy();
