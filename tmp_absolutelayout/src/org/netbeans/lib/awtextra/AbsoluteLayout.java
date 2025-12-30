package org.netbeans.lib.awtextra;

import java.awt.Component;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.LayoutManager2;
import java.util.HashMap;
import java.util.Map;

public class AbsoluteLayout implements LayoutManager2 {
    private final Map<Component, AbsoluteConstraints> constraints = new HashMap<>();

    @Override
    public void addLayoutComponent(Component comp, Object cons) {
        if (cons instanceof AbsoluteConstraints) {
            constraints.put(comp, (AbsoluteConstraints) cons);
        }
    }

    @Override
    public Dimension maximumLayoutSize(Container target) {
        return new Dimension(Integer.MAX_VALUE, Integer.MAX_VALUE);
    }

    @Override
    public float getLayoutAlignmentX(Container target) {
        return 0.5f;
    }

    @Override
    public float getLayoutAlignmentY(Container target) {
        return 0.5f;
    }

    @Override
    public void invalidateLayout(Container target) {
        // no-op
    }

    @Override
    public void addLayoutComponent(String name, Component comp) {
        // no-op
    }

    @Override
    public void removeLayoutComponent(Component comp) {
        constraints.remove(comp);
    }

    @Override
    public Dimension preferredLayoutSize(Container parent) {
        int maxW = 0;
        int maxH = 0;
        for (Component c : parent.getComponents()) {
            AbsoluteConstraints ac = constraints.get(c);
            if (ac != null) {
                int w = ac.width <= 0 ? (c.getBounds().width > 0 ? c.getBounds().width : 0) : ac.width;
                int h = ac.height <= 0 ? (c.getBounds().height > 0 ? c.getBounds().height : 0) : ac.height;
                maxW = Math.max(maxW, ac.x + w);
                maxH = Math.max(maxH, ac.y + h);
            } else {
                // If no constraint, use current bounds (avoid calling getPreferredSize to prevent recursion)
                int w = c.getBounds().width > 0 ? c.getBounds().width : 0;
                int h = c.getBounds().height > 0 ? c.getBounds().height : 0;
                maxW = Math.max(maxW, w);
                maxH = Math.max(maxH, h);
            }
        }
        // Provide a safe minimum size to avoid zero-size windows
        if (maxW == 0) maxW = 400;
        if (maxH == 0) maxH = 300;
        return new Dimension(maxW, maxH);
    }

    @Override
    public Dimension minimumLayoutSize(Container parent) {
        int maxW = 0;
        int maxH = 0;
        for (Component c : parent.getComponents()) {
            AbsoluteConstraints ac = constraints.get(c);
            if (ac != null) {
                int w = ac.width <= 0 ? (c.getBounds().width > 0 ? c.getBounds().width : 0) : ac.width;
                int h = ac.height <= 0 ? (c.getBounds().height > 0 ? c.getBounds().height : 0) : ac.height;
                maxW = Math.max(maxW, ac.x + w);
                maxH = Math.max(maxH, ac.y + h);
            } else {
                int w = c.getBounds().width > 0 ? c.getBounds().width : 0;
                int h = c.getBounds().height > 0 ? c.getBounds().height : 0;
                maxW = Math.max(maxW, w);
                maxH = Math.max(maxH, h);
            }
        }
        if (maxW == 0) maxW = 200;
        if (maxH == 0) maxH = 150;
        return new Dimension(maxW, maxH);
    }

    @Override
    public void layoutContainer(Container parent) {
        for (Component c : parent.getComponents()) {
            AbsoluteConstraints ac = constraints.get(c);
            if (ac != null) {
                int w = ac.width;
                int h = ac.height;
                if (w <= 0) w = c.getPreferredSize().width;
                if (h <= 0) h = c.getPreferredSize().height;
                c.setBounds(ac.x, ac.y, w, h);
            }
        }
    }
}
