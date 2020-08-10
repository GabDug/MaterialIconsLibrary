export default interface IconItem {
    name: string;
    version?: number;
    unsupported_families?: [];
    aliases?: string[];
    categories: string[];
    tags?: string[];
    sizes_px?: number[];
}
