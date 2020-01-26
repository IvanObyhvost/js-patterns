class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `http://${this.ip}:80`;
    }
}

const aws = new Server('AWS', '10.10.10.1');
