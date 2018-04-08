Admin Site for Offers @Tradus
========================

Admin site, implementing CRUD operations on a API and Authentication Roles (managed in memory).

Frameworks Used
--------------

### Front End ###
* Jquery
* Bootstrap 3.3.7
* Material Dashboard [(Creative Tim - Free Version)][2]
* SweetAlert2
* Vue.js (version 2)
* Axios

### BackEnd ###

* Symfony 3.4

Users and Passwords
--------------

* Username: [admin][1]   | ROLE_ADMIN

        @Password: tradus2018

* Username: [dummy][1]   | ROLE_USER

        @Password: tradus2018

ROLE_USER: are not allowed to edit any source, and they are not authorized by the firewall.yaml to even view the templates for create or edit.


Screen Shots
--------------

Login:

![Login:](/wiki/admin-login.png)


Offers:

![Offers:](/wiki/admin-offers.png)


View as a User:

![View as a User:](/wiki/admin-offers-as-user-role.png)


Search in Offers:

![Search in Offers:](/wiki/admin-offers-search.png)


Create a Offer:

![Create a Offer:](/wiki/admin-offer-new.png)


After Creating a Offer:

![After Creating a Offer:](/wiki/admin-offer-new-success.png)


Edit a Offer:

![Login:](/wiki/admin-offer-edit.png)


[1]:    https://void.com/
[2]:    http://www.creative-tim.com