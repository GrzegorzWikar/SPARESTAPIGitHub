export interface IDataRepo {
    id: number;
    html_url: string;
    name: string;
    description: string;
    languages: string;
    owner: {
        id: number;
        login: string;
        avatar_url: string;
    };
}

export interface IDataRepoLan{
    id: number;
    html_url: string;
    name: string;
    description: string;
    languages: Promise<string[]>;
    owner: {
        id: number;
        login: string;
        avatar_url: string;
    };
}

export interface IModal {
    avatar_url: string;
    name: string;
}


export interface IPagination{
    postPerPage: number;
    totalPosts: number;
    paginate: any
}

export interface IFilter{
    phrase: any;
    userName: any;
    language: any;
    search: boolean
}