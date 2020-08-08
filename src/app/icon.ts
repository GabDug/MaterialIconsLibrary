export default interface iconItem {
    name: string;
    version?: number;
    unsupported_families?: [];
    aliases?: string[];
    categories: string[];
    tags?: string[];
    sizes_px?: number[];
}
