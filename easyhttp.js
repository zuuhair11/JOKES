function easyHTTP() {
    this.http = new XMLHttpRequest();

}


easyHTTP.prototype.get = function(url, callback) {
    // OPEN
    this.http.open('GET', url, true);

    let self = this;

    this.http.onload = function() {
        // if I put this won't work, because I am inside other function
        // And every this pretend to its function
        if(self.http.status === 200) {
            callback(null, self.http.responseText);

        } else {
            callback(self.http.status);
        }
    }


    // SEND
    this.http.send();
};
