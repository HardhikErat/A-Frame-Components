// Registering component in box-component.js
AFRAME.registerComponent('move-box', {
    schema: {
        moveX: { type: "number", default: 1 },
        moveY: { type: "number", default: 1 },
        moveZ: { type: "number", default: 1 },
    },

    tick: function () {
        this.data.moveX = this.data.moveX + 0.01;

        var pos = this.el.getAttribute("position");

        pos.x = this.data.moveX;

        this.data.moveY = this.data.moveY + 0.01;

        pos.y = this.data.moveY;

        this.data.moveZ = this.data.moveZ + 0.01;

        pos.z = this.data.moveZ;

        this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
});
