package com.sarriaroman.PhotoViewer;
import android.content.Context;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;

import com.github.chrisbanes.photoview.OnSingleFlingListener;

class OnSwipeTouchListener implements OnSingleFlingListener {
   private static final int SWIPE_THRESHOLD = 100;
   private static final int SWIPE_VELOCITY_THRESHOLD = 100;

   @Override
   public boolean onFling(MotionEvent e1, MotionEvent e2, float velocityX, float velocityY) {
      try {
         float diffY = e2.getY() - e1.getY();
         float diffX = e2.getX() - e1.getX();
         if (Math.abs(diffX) > Math.abs(diffY)) {
            if (Math.abs(diffX) > SWIPE_THRESHOLD && Math.abs(velocityX) > SWIPE_VELOCITY_THRESHOLD) {
               if (diffX > 0) {
                  onSwipeRight();
               } else {
                  onSwipeLeft();
               }
            }
         }
         else {
            if (Math.abs(diffY) > SWIPE_THRESHOLD && Math.abs(velocityY) > SWIPE_VELOCITY_THRESHOLD) {
               if (diffY > 0) {
                  onSwipeDown();
               } else {
                  onSwipeUp();
               }
            }
         }
      }
      catch (Exception exception) {
         exception.printStackTrace();
      }
      return false;
   }

   public void onSwipeRight() {
   }
   public void onSwipeLeft() {
   }
   private void onSwipeUp() {
   }
   private void onSwipeDown() {
   }
   private void onClick() {
   }
   private void onDoubleClick() {
   }
   private void onLongClick() {
   }
}
