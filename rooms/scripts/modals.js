var level = 1;
var obj_three_click = 0;
var obj_two_click = 0;
var obj_one_click = 0;
// When the user clicks on the button, open the modal
$('#instructions').click(function () {
  $('#mod-h1').text('');
  $('#mod-h2').text('');
  $('#mod-p').text('');
  $('#modal-link').text('');
  $('#myModal').css('display', 'block');
  $('#mod-h1').append('ברוכים הבאים לחדר הבריחה');
  $('#mod-h2').append('הוראות');
  $('#mod-p').append('חדר הבריחה הוירטואלי שלפניכם כולל תמונה ושלושה רמזים.<br>המשחק כולל 2 שלבים.<br>עם סיום השלב הראשון תועברו אוטומטית לשלב השני והאחרון.<br>בתמונה מסתתרים שלושה אובייקטים שעליכם למצוא.<br>הכרטיסיות מימין ירמזו לכם על חפץ או אובייקט כלשהו בתמונה.<br>בהתאם לרמזים שתקבלו, נסו לזהות את האובייקט הרלוונטי בתמונה ולחצו עליו ב"קליק".<br>אם צדקתם ו"הקלקתם" במקום הנכון, תופיע על המסך דמות, לחצו עליה והיא תספר לכם עובדה מיוחדת אודות הספארי של רמת גן.');
  $('.modal-content p').css('justify-content', 'right')
    .css('width', '82%')

})
$('#obj-three').click(function () {
  ++obj_three_click;
  if (obj_three_click > 1) {
    $('#mod-h1').text('');
    $('#mod-h2').text('');
    if (level == 1) {
      if ($('#modal-link').text('<a id="modal-link" href="http://www.metrycom.com/"target="_blank">http://www.metrycom.com/</a>')) {
        $('#modal-link').remove();
      }
      $('#mod-h2').css('text-align', 'right');
      $('#mod-h2').css('width', '82%');
      $('#mod-p').text('');
      $('#myModal').css('display', 'block');
      $('.modal-content h1').append('הידעת?!');
      $('.modal-content p').append('חברת החשמל מספקת אנרגיה מצפון המדינה ועד לדרום.\
                                  על מנת לעמוד ביעד זה מערך הרשת, נמצא פרוס ברחבי המדינה בהתאם (המערך כל כך ארוך ועצום עד כדי כך שאם נפרוס את רשת ההולכה והחלוקה\
                                    –נצליח להקיף פעמיים את כדור הארץ!). כפועל יוצא מכך, חברת החשמל סבלה לא פעם מגניבות כבלים וציוד יקר ערך,\
                                    אך השיא הגיע כאשר גניבת הכבלים הגדולה במדינה קרתה דווקא אצלנו, \ועשרות קילומטרים של כבלים בדרום המדינה נגנבו על ידי שודדים.\
                                    על מנת להתמודד עם בעיה זו, נעשה פיילוט עם חברת מטריקום אשר התקינה סנסורים חכמים מטכנולוגית ה-IOT לאורך קווי הרשת,\
                                    במטרה לאתר בזמן מפגעים ובעיות מסוג זה.\
                                  לקריאה מורחבת היכנסו לאתר החברה:<br>\
                                ');
      if ($('#modal-link').text('')) {
        $('.modal-content').append('<a id="modal-link" href="http://www.metrycom.com/"target="_blank">http://www.metrycom.com/</a>');
      }
      $('#modal-link').css('color', 'blue');
      $('.modal-content h2').css('justify-content', 'right');
      $('.modal-content p').css('justify-content', 'right')
        .css('width', '82%');
    }
    else if (level == 2) {
      $('#mod-h1').text('');
      $('#mod-h2').text('');
      $('#mod-p').text('');
      $('#modal-link').text('');
      $('#myModal').css('display', 'block');
      $('.modal-content h1').append('הידעת?!');
      $('.modal-content p').append('גניבת הכבלים הגדולה במדינה, קרתה דווקא בחברת החשמל, כשגנבים גנבו עשרות קילומטרים של כבלים בדרום הארץ. כדי להתמודד עם אתגרים אלו, נעשה פיילוט עם חברת מטריקום וע"י שימוש בטכנולוגיה של IOT .ניתן לקבל התראות על מצב הכבלים ולמנוע גניבות');
      $('.modal-content p').css('justify-content', 'right')
        .css('width', '82%')

    }
  } else {
    $('#mod-h1').text('');
    $('#mod-h2').text('');
    $('#mod-p').text('');
    $('#modal-link').text('');
    $('#mod-h2').css('text-align', 'center');
    $('#myModal').css('display', 'block');
    $('.modal-content h1').append('יפה!');
    $('.modal-content p').css('justify-content', 'center')
      .css('width', '62%')
    $('.modal-content p').append('');
    if (level == 1) {
      $('.modal-content p').append('אני התנין !');
    }
    else if (level == 2) {
      $('.modal-content p').append('לחצו על הגנב כדי לגלות עובדה מעניינת');
    }
  }
})
$('#obj-two').click(function () {
  ++obj_two_click;
  if (obj_two_click > 1) {
    if (level == 1) {
      $('#mod-h1').text('');
      $('#mod-h2').text('');
      $('#mod-p').text('');
      $('#modal-link').text('');
      $('#myModal').css('display', 'block');
      $('.modal-content h1').append('הידעת?!');
      $('.modal-content p').append('בחברת החשמל בשנה האחרונה נעשה יותר מ-10 פיילוטים עם 4 חטיבות – לוגסטיקה, יצור, רשת ופרויקטים בעזרת טכנולוגית רחפנים. בנושאי ניטור, שינוע, אבטחה ועוד.\
                                  רחפנים הינה טכנולוגיה אשר יכולה להיות בשימוש לצרכים ולפתרון אתגרים מגוונים,\
                                  זו אולי אחת הסיבות כי הוקם בחברת החשמל וועדה מיוחדת אשר מטרתה לשלב ולבחון טכנולוגיה זו,\
                                    לפתרון בעיות ולהבאת ערך לחברה. כך למשל, אנו יכולים לראות כי בשנה אשתקד,\
                                  נעשו בחברה יותר מ-10 פיילוטים שונים בעזרת הטכנולוגיה ועם יותר מ-4 חטיבות שונות – לוגסטיקה ותפעול, ייצור רשת וגם חטיבת הפרויקטים.\
                                  הנושאים השונים בהם היה התנסות של הטכנולוגיה היו מגוונים בהתאם, וכללו בין השאר ניטור, שינוע, אבטחה ועוד.\
                                  ');
      $('.modal-content p').css('justify-content', 'right')
        .css('width', '82%')
    } else if (level == 2) {
      $('#mod-h1').text('');
      $('#mod-h2').text('');
      $('#mod-p').text('');
      $('#modal-link').text('');
      $('#myModal').css('display', 'block');
      $('.modal-content h1').append('הידעת?!');
      $('.modal-content p').append('החדשנות הראשונה בארץ בתחום החשמל נעשתה על ידי רוטנברג, שהיה יזם פורץ דרך עם רעיון חולמני להקים מפעל ליצור חשמל.');
      $('.modal-content p').css('justify-content', 'right')
        .css('width', '82%')
    }

  } else {
    $('#mod-h1').text('');
    $('#mod-h2').text('');
    $('#mod-p').text('');
    $('#modal-link').remove();
    $('#myModal').css('display', 'block');
    $('.modal-content h1').append('יפה!');
    $('.modal-content p').css('justify-content', 'center')
      .css('width', '62%');
    $('.modal-content p').append('');
    if (level == 1) {
      $('.modal-content p').append('אנחנו הגורילות זקוקים לעזרה ברבייה ולכן אנו נעזרים בארגון האירופאי');
    }
    else if (level == 2) {
      $('.modal-content p').append('לחצו על כדור הארץ כדי לגלות עובדה מעניינת !');
    }
  }
})
$('#obj-one').click(function () {
  ++obj_one_click;
  if (obj_one_click > 1) {
    if (level == 1) {
      $('#mod-h1').text('');
      $('#mod-h2').text('');
      $('#mod-p').text('');
      $('#modal-link').remove();
      $('#myModal').css('display', 'block');
      $('.modal-content h1').append('הידעת?!');
      $('.modal-content p').append('יחידת החדשנות בחברת החשמל מונה  5 עובדים בלבד !');
      $('.modal-content p').css('justify-content', 'right')
        .css('width', '82%');
    } else if (level == 2) {
      $('#mod-h1').text('');
      $('#mod-h2').text('');
      $('#mod-p').text('');
      $('#modal-link').text('');
      $('#myModal').css('display', 'block');
      $('.modal-content h1').append('הידעת?!');
      $('.modal-content p').append("בראש היחידה לחדשנות עומדת הגב' דורין ברבי, אשר משמשת כדוגמה מדהימה להצלחה בתחום היזמות. פועלה של ברבי הידהד בכל העולם ואף פורסמה עליה כתבה מפוארת במגזין העולמי Forbes תחת הקטגוריה של 30 מתחת ל-30, המציגה את סיפורם.ן של יזמים.ות מכל העולם, אשר פועלם.ן פרץ לתודעה באופן בולט במיוחד. אין ספק שהיחידה לחדשנות בחברת החשמל נמצאת בידיים טובות.");
      $('.modal-content p').css('justify-content', 'right')
        .css('width', '82%')
    }

  } else {
    $('#mod-h1').text('');
    $('#mod-h2').text('');
    $('#mod-p').text('');
    $('#modal-link').text('');
    $('#myModal').css('display', 'block');
    $('.modal-content h1').append('יפה !');
    $('.modal-content p').append('');
    $('.modal-content p').css('justify-content', 'center')
      .css('width', '62%');
    if (level == 1) {
      $('.modal-content p').append('אנחנו העופות מככבים בביקורים אצל הוטרינר, ומגיעים לעיתים תכופות לביה"ח בספארי');
    }
    else if (level == 2) {
      $('.modal-content p').append('לחצו על &nbsp;&nbsp;<i>"Forbes 30 under 30"</i>&nbsp;&nbsp; כדי לגלות עובדה מעניינית !');
    }

  }
})

$('.close').click(function () {
  $('#myModal').css('display', 'none');
  $('#modal-link').remove();
})

// When the user clicks anywhere outside of the modal, close it
$(window).click(function (event) {
  if (event.target == myModal) {
    $('#myModal').css('display', 'none');
  }
})