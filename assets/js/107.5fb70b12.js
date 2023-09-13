(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{417:function(e,t,n){"use strict";n.r(t);var o=n(12),i=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"support-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#support-request"}},[e._v("#")]),e._v(" Support Request")]),e._v(" "),t("p",[e._v("In case you need support or you found a bug it's all about informations that you need to deliver.")]),e._v(" "),t("h2",{attrs:{id:"usual-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usual-request"}},[e._v("#")]),e._v(" Usual request")]),e._v(" "),t("p",[e._v("To provide a log, please go to System -> Log in the WebUI and copy the log. Then create a paste at "),t("a",{attrs:{href:"https://pastebin.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pastebin.com"),t("OutboundLink")],1),e._v(" with the copied log.\nOnce you have the Pastebin link, please open a issue on "),t("a",{attrs:{href:"https://github.com/hyperion-project/hyperion.ng/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),t("OutboundLink")],1),e._v(", fill out the template and provide the Pastebin link.")]),e._v(" "),t("h2",{attrs:{id:"segmentation-faults"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#segmentation-faults"}},[e._v("#")]),e._v(" Segmentation faults")]),e._v(" "),t("p",[e._v("Debugging segmentation faults requires a bunch of work, if we don't own your hardware (idr one of these plenty ARM systems) or can't reconstruct the segmentation fault we need a backtrace log from you. In order to create one, follow these steps.")]),e._v(" "),t("ul",[t("li",[e._v('You need a "Debug" version of Hyperion, download and install it over your existing installation.')]),e._v(" "),t("li",[e._v('Install "GDB", gbd is a tool which is often used for debugging. Get it from the software repository of your distribution (Debian e.g. '),t("code",[e._v("sudo apt-get install gdb")])])]),e._v(" "),t("h3",{attrs:{id:"steps-of-execution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#steps-of-execution"}},[e._v("#")]),e._v(" Steps of execution")]),e._v(" "),t("ul",[t("li",[e._v("Open a terminal")]),e._v(" "),t("li",[e._v("Make sure Hyperion is NOT running, this can be done by typing "),t("code",[e._v("sudo service hyperiond stop")]),e._v(" into the terminal and press enter")]),e._v(" "),t("li",[e._v("Type in "),t("code",[e._v("gdb")]),e._v(' and press enter. You will now see the gdb welcome information and a "(gdb)" in front of your cursor')]),e._v(" "),t("li",[e._v('Tell gdb where "hyperiond" is located, usually at /usr/share/hyperion/bin/hyperiond. Prepend "file" to the path. So type into terminal something like that and press enter: '),t("code",[e._v("file /usr/share/hyperion/bin/hyperiond")])]),e._v(" "),t("li",[e._v("gdb should tell you now that the binary has been loaded with it's symbols etc")]),e._v(" "),t("li",[e._v("Now type in "),t("code",[e._v("run")]),e._v(" and press enter, this will start Hyperion. Now you can use Hyperion as usual, repeat the steps you did to create a segmentation fault.")]),e._v(" "),t("li",[e._v("A segmentation fault happened, when Hyperion stops responding and you see something like this as last message at the terminal: "),t("code",[e._v('Thread 1 "hyperiond" received signal SIGSEGV, Segmentation fault.')])]),e._v(" "),t("li",[e._v("Now type in "),t("code",[e._v("backtrace")]),e._v(" and press enter, add the backtrace to your support request thread at our forum. "),t("a",{attrs:{href:"https://forum.hyperion-project.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hyperion Project Forum"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("To quit gdb press enter and type in "),t("code",[e._v("quit")]),e._v(", you can start Hyperion again with "),t("code",[e._v("sudo service hyperiond start")]),e._v('. It\'s not recommended to use "Debug" Hyperion builds in production, just install the "Release" version again.')])]),e._v(" "),t("h3",{attrs:{id:"example-backtrace-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-backtrace-log"}},[e._v("#")]),e._v(" Example backtrace log")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  (gdb) backtrace\n  #0  0x0000000000000000 in ?? ()\n  #1  0x00000000006173f2 in LinearColorSmoothing::queueColors (this=0xfdfa70, \n      ledColors=std::vector of length 34, capacity 34 = {...})\n      at /home/hyperion/Dokumente/hyperion.ngBeta/libsrc/hyperion/LinearColorSmoothing.cpp:153\n  #2  0x0000000000617374 in LinearColorSmoothing::updateLeds (this=0xfdfa70)\n      at /home/hyperion/Dokumente/hyperion.ngBeta/libsrc/hyperion/LinearColorSmoothing.cpp:143\n  #3  0x0000000000609652 in LinearColorSmoothing::qt_static_metacall (\n      _o=0xfdfa70, _c=QMetaObject::InvokeMetaMethod, _id=1, _a=0x7fffffffd190)\n      at /home/hyperion/Dokumente/hyperion.ngBeta/build/libsrc/hyperion/moc_LinearColorSmoothing.cpp:85\n  #4  0x00007ffff59abd2a in QMetaObject::activate(QObject*, int, int, void**) ()\n     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5\n  #5  0x00007ffff59b85c8 in QTimer::timerEvent(QTimerEvent*) ()\n     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5\n  #6  0x00007ffff59acbb3 in QObject::event(QEvent*) ()\n     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5\n  #7  0x00007ffff78a505c in QApplicationPrivate::notify_helper(QObject*, QEvent*)\n     () from /usr/lib/x86_64-linux-gnu/libQt5Widgets.so.5\n  #8  0x00007ffff78aa516 in QApplication::notify(QObject*, QEvent*) ()\n     from /usr/lib/x86_64-linux-gnu/libQt5Widgets.so.5\n  #9  0x00007ffff597d38b in QCoreApplication::notifyInternal(QObject*, QEvent*)\n  ---Type <return> to continue, or q <return> to quit---\n      () from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5\n  #10 0x00007ffff59d25ed in QTimerInfoList::activateTimers() ()\n     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5\n  #11 0x00007ffff59d2af1 in ?? () from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5\n  #12 0x00007ffff4572127 in g_main_context_dispatch ()\n     from /lib/x86_64-linux-gnu/libglib-2.0.so.0\n  #13 0x00007ffff4572380 in ?? () from /lib/x86_64-linux-gnu/libglib-2.0.so.0\n  #14 0x00007ffff457242c in g_main_context_iteration ()\n     from /lib/x86_64-linux-gnu/libglib-2.0.so.0\n  #15 0x00007ffff59d37cf in QEventDispatcherGlib::processEvents(QFlags<QEventLoop::ProcessEventsFlag>) () from /usr/lib/x86_64-linux-\n  gnu/libQt5Core.so.5\n  #16 0x00007ffff597ab4a in QEventLoop::exec(QFlags<QEventLoop::ProcessEventsFlag>) () from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5\n  #17 0x00007ffff5982bec in QCoreApplication::exec() ()\n     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5\n  #18 0x00000000005d9279 in main (argc=1, argv=0x7fffffffde08)\n      at /home/hyperion/Dokumente/hyperion.ngBeta/src/hyperiond/main.cpp:337\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);