// Generated by CoffeeScript 1.9.3
(function() {
  this.EmojiPicker = (function() {
    function EmojiPicker(options) {
      var ref, ref1;
      if (options == null) {
        options = {};
      }
      jQuery.emojiarea.iconSize = (ref = options.iconSize) != null ? ref : 25;
      jQuery.emojiarea.assetsPath = (ref1 = options.assetsPath) != null ? ref1 : '';
      this.generateEmojiIconSets(options);
      if (!options.emojiable_selector) {
        options.emojiable_selector = '[data-emojiable=true]';
      }
      this.options = options;
    }

    EmojiPicker.prototype.discover = function() {
      var isiOS;
      isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if (isiOS) {
        return;
      }
      return jQuery(this.options.emojiable_selector).emojiarea(jQuery.extend({
        emojiPopup: this,
        norealTime: true
      }, this.options));
    };

    EmojiPicker.prototype.generateEmojiIconSets = function(options) {
      var column, dataItem, hex, i, icons, j, name, reverseIcons, row, totalColumns;
      icons = {};
      reverseIcons = {};
      i = void 0;
      j = void 0;
      hex = void 0;
      name = void 0;
      dataItem = void 0;
      row = void 0;
      column = void 0;
      totalColumns = void 0;
      j = 0;
      while (j < Config.EmojiCategories.length) {
        totalColumns = Config.EmojiCategorySpritesheetDimens[j][1];
        i = 0;
        while (i < Config.EmojiCategories[j].length) {
          dataItem = Config.Emoji[Config.EmojiCategories[j][i]];
          name = dataItem[1][0];
          row = Math.floor(i / totalColumns);
          column = i % totalColumns;
          icons[':' + name + ':'] = [j, row, column, ':' + name + ':'];
          reverseIcons[name] = dataItem[0];
          i++;
        }
        j++;
      }
      jQuery.emojiarea.icons = icons;
      return jQuery.emojiarea.reverseIcons = reverseIcons;
    };

    EmojiPicker.prototype.colonToUnicode = function(input) {
      if (!input) {
        return '';
      }
      if (!Config.rx_colons) {
        Config.init_unified();
      }
      return input.replace(Config.rx_colons, function(m) {
        var val;
        val = Config.mapcolon[m];
        if (val) {
          return val;
        } else {
          return '';
        }
      });
    };

    EmojiPicker.prototype.unicodeToImage = function(input) {
      if (!input) {
        return '';
      }
      if (!Config.rx_codes) {
        Config.init_unified();
      }
      return input.replace(Config.rx_codes, function(m) {
        var $img, val;
        val = Config.reversemap[m];
        if (val) {
          val = ':' + val + ':';
          $img = jQuery.emojiarea.createIcon(jQuery.emojiarea.icons[val]);
          return $img;
        } else {
          return '';
        }
      });
    };

    EmojiPicker.prototype.colonToImage = function(input) {
      if (!input) {
        return '';
      }
      if (!Config.rx_colons) {
        Config.init_unified();
      }
      return input.replace(Config.rx_colons, function(m) {
        var $img;
        if (m) {
          $img = jQuery.emojiarea.createIcon(jQuery.emojiarea.icons[m]);
          return $img;
        } else {
          return '';
        }
      });
    };

    return EmojiPicker;

  })();

}).call(this);

