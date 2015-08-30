var Video = function (video) {
    this.id = video.id || Date.now();
    this.title = video.title;
    this.url = video.url;
    this.category = video.category;
};

Video.prototype.getId = function () {
    return this.id;
};

Video.prototype.getTitle = function () {
    return this.title;
};

Video.prototype.getUrl = function () {
    return this.url;
};

Video.prototype.getCategory = function () {
    return this.category;
};