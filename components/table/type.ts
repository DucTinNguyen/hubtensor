export interface Columns<T> {
    key: string;
    name: string;
    render?: (column: Columns<T>, item: T) => React.ReactElement;
    renderColumns?: (columns: Columns<T>) => React.ReactElement;
}