import { API, InlineTool } from "@editorjs/editorjs";
/**
 * Custom font family inline tool
 */
declare class CustomFontFamilyInlineTool implements InlineTool {
    /**
     * Css class of custom font family inline tool
     */
    static readonly CSS_CLASS = "custom-font-family";
    /**
     * Api  of custom font family inline tool
     */
    readonly api: API;
    state: boolean;
    /**
     * Font family of custom font family inline tool
     */
    private font_Family;
    /**
     * Creates an instance of custom font family inline tool.
     * @param { api, state }
     */
    constructor({ api, state }: {
        api: API;
        state: false;
    });
    /**
     * Gets whether is inline
     */
    static get isInline(): boolean;
    /**
     * Gets title
     */
    static get title(): string;
    /**
     * Surrounds custom font family inline tool
     * @param range
     * @returns surround
     */
    surround(): void;
    /**
     * Renders custom font family inline tool
     * @returns render
     */
    render(): HTMLElement;
    static get sanitize(): {
        text: {
            br: boolean;
        };
        span: {
            style: boolean;
            class: boolean;
            id: boolean;
            "data-tooltip": boolean;
            "data-user": boolean;
        };
        mark: {
            id: boolean;
            class: boolean;
        };
        font: {
            face: boolean;
            color: boolean;
            style: boolean;
            class: boolean;
            size: boolean;
        };
    };
    /**
     * Checks state
     * @param selection
     * @returns true if state
     */
    checkState(): boolean;
}
export default CustomFontFamilyInlineTool;
