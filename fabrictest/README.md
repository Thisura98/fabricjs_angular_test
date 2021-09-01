# Fabrictest

<img src="https://raw.githubusercontent.com/Thisura98/fabricjs_angular_test/main/res/output.gif"/>

Test Project to try out integration with [Fabric JS](http://fabricjs.com/)

### Key Points

1. V4 has some [breaking changes](http://fabricjs.com/v4-breaking-changes).
2. Check Object doc for events that can be listened to (e.g. [Canvas](http://fabricjs.com/docs/fabric.Canvas.html)).
3. When loading images through URLs, the image must be added __after__ it has been loaded.

```ts
// Async method to load image
const img = fabric.Image.fromURL('<url>', (fabricImage) => {
    // Add to canvas
    // fabricImage: fabric.Image
    this.canvas?.add(fabricImage);
});
```