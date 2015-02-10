//********************************************************************
//  LabelDemo.java       Author: Lewis/Loftus
//
//  Demonstrates the use of image icons in labels.
//********************************************************************
import java.io.File;
import java.awt.*;
import javax.swing.*;
import java.net.URL;
import javax.sound.sampled.*;

public class LabelDemo2
{

  // private static void meowSound () throws Exception {
  //
  //
  //  }

   private static void playBachAndCatNoise () throws Exception {

     File url2 = new File("url/music/Cat Meow.wav");
     Clip clip2 = AudioSystem.getClip();
     // getAudioInputStream() also accepts a File or InputStream
     AudioInputStream ais2 = AudioSystem.getAudioInputStream( url2 );
     clip2.open(ais2);
     clip2.loop(1);


     File url = new File("url/music/Air Bach.wav");
     Clip clip = AudioSystem.getClip();
     // getAudioInputStream() also accepts a File or InputStream
     AudioInputStream ais = AudioSystem.getAudioInputStream( url );
     clip.open(ais);
     clip.loop(Clip.LOOP_CONTINUOUSLY);


    }



   public static void main (String[] args)
   {

     //-----------------------------------------------------------------
     //  Creates and displays the primary application frame.
     //-----------------------------------------------------------------
    JFrame frame = new JFrame ("Don't forget to shave your eyebrows");
    frame.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE);

    ImageIcon kittens = new ImageIcon ("img/kittens.gif");
    ImageIcon kittenKiss = new ImageIcon("img/kittenKiss.gif");
    ImageIcon kittenSleepy = new ImageIcon("img/kittenSleepy.gif");
    ImageIcon kittenHighFive = new ImageIcon("img/kittenHighFive.gif");

    JLabel label1, label2, label3, label4;

    label1 = new JLabel ("Where's mom?", kittens, SwingConstants.CENTER);
    label1.setHorizontalTextPosition (SwingConstants.CENTER);
    label1.setVerticalTextPosition (SwingConstants.TOP);

    label2 = new JLabel ("Give me Kiss", kittenKiss, SwingConstants.CENTER);
    label2.setHorizontalTextPosition (SwingConstants.CENTER);
    label2.setVerticalTextPosition (SwingConstants.TOP);

    label3 = new JLabel ("T-t-t-too muuuuch coffeeeeeeee.", kittenSleepy, SwingConstants.CENTER);
    label3.setHorizontalTextPosition (SwingConstants.LEFT);
    label3.setVerticalTextPosition (SwingConstants.BOTTOM);

    label4 = new JLabel ("I'm stuck behind glass! Help!", kittenHighFive, SwingConstants.CENTER);

    // Initializes Labels
    JPanel panel = new JPanel();
    panel.setBackground (Color.white);
    panel.setPreferredSize (new Dimension (200, 250));
    panel.add (label1);
    panel.add (label2);
    panel.add (label3);
    panel.add (label4);

    frame.getContentPane().add(panel);
    frame.pack();
    frame.setVisible(true);

    try {
      // meowSound();
      playBachAndCatNoise();
      }
    catch(Exception e) {
      System.out.println("Meow");
    }


  }


}
