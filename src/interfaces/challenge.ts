import { ApiAbstractInterface } from "./api";

export interface ApiChallengeInterface extends ApiAbstractInterface {
    created_at: Date;
    updated_at: Date;
    title: string;
    description: string;
    content: string;
    published: boolean;
    difficulty: 'basic' | 'easy' | 'medium' | 'hard' | 'expert';
    picture: string;
}