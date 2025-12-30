package org.netbeans.lib.awtextra;

public class AbsoluteConstraints {
    public int x;
    public int y;
    public int width = -1;
    public int height = -1;

    public AbsoluteConstraints(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public AbsoluteConstraints(int x, int y, int width, int height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
