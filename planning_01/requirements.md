### Application User

1. User new Account (unique email address)
    1. Account verification (verify email address)
    2. User profile image
    3. User details (name, email, position, bio, phone, address, etc.)
    4. Being able to update user detail information
2. User reset password(without being logged in)
    1. Password reset link should expire within 24 hours
3. User login (using email and a password)
    1. Token based authentication (JWT Token)
    2. Refresh Token seamlessly
4. Brute force attack mitigation (account lock mechanism)
    1. Lock account on 6 failed login attempts
5. Role and Permission based application access (ACL)
    1. Protect application resources using roles and permissions
6. Two-Factor authentication (using user Phone number)
    1. Send verification code to user's phone
7. Keep track of user activities (login, account change, etc)
    1. Ability to report suspicious activities
    2. Track information
        1. IP Address
        2. Device
        3. Browser
        4. Date
        5. Type

### Customers

1. Customer Information
    1. Manage customer information (name, address, etc)
    2. Customer can be a person or an institution
    3. Customer should have a **status**
    4. Customer will have invoices
    5. Print customers in spreadsheet
2. Search Customers
    1. Be able to search customers by name
    2. Pagination

### Invoices

1. Manage Invoices
    1. Create new invoices
    2. Add invoices to customer
    3. Print invoices for mailing
    4. Print invoices in spreadsheet
    5. Download invoices as PDF
