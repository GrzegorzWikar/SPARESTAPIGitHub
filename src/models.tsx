export interface IDataRepo {
    id: number;
    html_url: string;
    name: string;
    description: string;
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