interface props {
    block: Element;
    others: Array<object>;
}
type Callback = ({}: props) => object;
export declare const moonBlock: (selector: string, cb: Callback) => void;
export {};
