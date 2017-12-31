struct Book {
    char title[100];
    double price;
    _Bool isPublished;
    _Bool isHardBack;
};

Book first;

first.title = "Hello World";
first.price = 23.50;
first.isPublished = false;
first.isHardBack = true;
