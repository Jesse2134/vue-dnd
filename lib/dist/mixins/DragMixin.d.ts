import DragAwareMixin from "./DragAwareMixin";
export default class DragMixin extends DragAwareMixin {
    type: string;
    data: any;
    dragImageOpacity: any;
    disabled: boolean;
    goBack: boolean;
    handle: string | undefined;
    delta: number;
    delay: number;
    dragClass: String;
    vibration: number;
    scrollingEdgeSize: number;
    dragInitialised: boolean;
    dragStarted: boolean;
    ignoreNextClick: boolean;
    initialUserSelect: any;
    downEvent: TouchEvent | MouseEvent;
    startPosition: any;
    delayTimer: any;
    scrollContainer: any;
    onSelectStart(e: any): void;
    performVibration(): void;
    onMouseDown(e: MouseEvent | TouchEvent): void;
    onMouseClick(e: any): boolean;
    onMouseMove(e: TouchEvent | MouseEvent): void;
    onEasyDnDMove(e: any): void;
    onMouseUp(e: MouseEvent | TouchEvent): void;
    onKeyUp(e: KeyboardEvent): void;
    cancelDragActions(): void;
    finishDrag(): void;
    dndDragStart(ev: any): void;
    dndDragEnd(ev: any): void;
    created(): void;
    mounted(): void;
    beforeDestroy(): void;
    get cssClasses(): any;
    get currentDropMode(): any;
    createDragImage(selfTransform: string): any;
}
