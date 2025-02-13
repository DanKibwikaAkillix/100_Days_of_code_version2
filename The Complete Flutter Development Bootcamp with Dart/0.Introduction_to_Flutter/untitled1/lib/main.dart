import 'package:flutter/material.dart';

void main() => runApp(
      MaterialApp(
        home: Scaffold(
            // appBar: AppBar(
            //   title:Title(
            //       color: Colors.white,
            //       child: Text("LearnGo"),) ,
            //   backgroundColor: Colors.blue,
            // ),
            backgroundColor: Colors.white,
            body: Center(
              child: Image(
                image:AssetImage("images/img1.png"),
              ),
            ),
        ),
      ),
    );
