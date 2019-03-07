const makeHashTag = (tag) => `<span class="card__hashtag-inner">
                        <input
                          type="hidden"
                          name="hashtag"
                          value="repeat"
                          class="card__hashtag-hidden-input"
                        />
                        <button type="button" class="card__hashtag-name">
                          #${tag}
                        </button>
                        <button type="button" class="card__hashtag-delete">
                          delete
                        </button>
                      </span>`;

export default (tags) => {
  let tagsStr = ``;
  tags.forEach(function (value) {
    tagsStr = tagsStr + makeHashTag(value);
  });
  return tagsStr;
};

