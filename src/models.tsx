import { Dispatch, SetStateAction } from "react";

export interface IDataRepo {
    languages_url: string;
}

export interface IDataRepoLan{
    id: number;
    html_url: string;
    name: string;
    description: string;
    languages_url: string;
    languages: string[];
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

export interface IPostPerPage {
    postsNumber : Dispatch<SetStateAction<number>>
}

export interface IPagination{
    totalPosts: number;
    numberOfPosts: number
    paginate: Dispatch<SetStateAction<number>>;
    postPerPage: Dispatch<SetStateAction<number>>;
}

export interface IFilter{
    user: Dispatch<SetStateAction<string>>;
    phrase: Dispatch<SetStateAction<string>>;
    language: Dispatch<SetStateAction<string>>;
    submite: React.MouseEventHandler<HTMLButtonElement>
}