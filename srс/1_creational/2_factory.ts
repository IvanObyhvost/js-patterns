class SimpleMembership {
    private name: string;
    private cost: number;
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMembership {
    private name: string;
    private cost: number;
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMembership {
    private name: string;
    private cost: number;
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

enum MembershipType {
    simple = 'simple',
    standard = 'standard',
    premium = 'premium'
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    create(name: string, type: MembershipType = MembershipType.simple) {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);
        return member;
    }
}

const factory = new MemberFactory();
const members = [
    factory.create('Ivan', MembershipType.simple),
    factory.create('Alena', MembershipType.premium),
    factory.create('Ivan 2', MembershipType.standard),
];
